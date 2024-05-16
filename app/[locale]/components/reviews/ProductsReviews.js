"use client";
import { useTranslations } from 'next-intl';
import { Loading } from '../global/Loading';
import { ReviewCard } from './ReviewCard';

export const ProductsReviews = ({ productsReviews, loading }) => {
  const t = useTranslations();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {productsReviews?.length ? (
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {productsReviews?.map((review) => (
                <ReviewCard review={review} key={review?.id} />
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
