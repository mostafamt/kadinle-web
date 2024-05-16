import { POINTS_TYPE } from "../static/constants";
import { checkIfTheInvitedTimesReachEnd, increasePoints } from "./points";
import { supabase } from "./supabase.config";
import { isUserInvited } from "./user";
import Cookies from "js-cookie";

// Sign up function
export const signup = async (email, password, first_name, last_name) => {
  const auth = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { first_name, last_name },
    },
  });
  
  if(!auth.data) return auth
  const res = await supabase.from("user").insert({
    id: auth?.data?.user?.id,
    email: email,
    first_name,
    last_name,
  });

  if (!res?.error) {
    invitedProcess(email);
  }

  return res;
};

// Log in function
export const login = async (email, password) => {
  const {
    error,
    data: { session, user },
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user, session, error };
};

// Log out function
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) Cookies.remove("KADINLE_USER");
  return { error };
};
// Invited process
const invitedProcess = async (email) => {
  const response = await isUserInvited(email);
  if (!response?.error) {
    await supabase
      .from("user_invite")
      .select("*")
      .update({ status: true })
      .eq("id", response?.data?.at(0)?.id);
    const userId = response?.data?.[0]?.user_id;
    const checkToContinue = await checkIfTheInvitedTimesReachEnd(userId);
    if (checkToContinue?.data?.length >= 5) return;

    const pointType = POINTS_TYPE?.INVITE;
    await increasePoints({
      point_numeric: pointType?.numeric,
      user_id: userId,
      point: pointType?.point_count,
    });
  }
};

export const forgotPassword = async (email) => {
  try {
    const checkEmail = await supabase
      .from("user")
      .select("*")
      .eq("email", email);
    if (!checkEmail?.data?.length)
      return {
        error: "email_not_found",
      };

    const res = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `https://kadinle.com/update-password`,
    });
    return res;
  } catch (error) {}
};

export const updatePassword = async (new_password) => {
  const res = await supabase.auth.updateUser({ password: new_password });
  return res;
};
export const loginWith = async (provider) => {
  const res = await supabase.auth.signInWithOAuth({
    provider,
  });
  return res;
};

// complete user info
export async function completedUserInfo(information) {
  const { data, error } = await supabase.from("user").insert(information);
  return data;
}

// activation email
async function sendActivationEmail(email) {
  const { error } = await supabase.auth.api.sendVerificationEmail(email);
  if (error) {
  } else {
  }
}

export const handleRestoreSession = async () => {
  try {
    const session =
      typeof window === "object" &&
      JSON.parse(localStorage.getItem("supabaseSession"));
    if (session && supabase.auth) {
      const { error } = await supabase.auth.restoreSession(session);
      if (!error) return true;
    }
  } catch (error) {}
};

export const deleteAccount = async (userId) => {
  const response = await supabase.auth.admin.deleteUser(userId);
  return response;
};

const sessionDuration = 30 * 24 * 60 * 60;

// Update the session duration
export async function updateSessionDuration() {
  try {
    const { data, error } = await supabase.auth.update({
      access_token_lifetime: sessionDuration,
    });
    if (error) {
      console.error(error);
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}

export const refreshSession = (access_token, refresh_token, expires_at) => {
  const { data, error } = supabase.auth.setSession({
    access_token,
    refresh_token,
    expires_at,
  });
};
