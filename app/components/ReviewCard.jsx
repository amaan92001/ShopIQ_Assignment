function ReviewCard({ review }) {
    return (
        <div className="p-2 rounded-md border min-w-[200px] border-slate-400 shadow-xl">
            <div className="flex justify-between">
                <p>{review.reviewerName}</p>
                <p>&#10024; {review.rating}</p>
            </div>
            <p className="mt-2 text-sm italic text-gray-500">
                {review.comment}
            </p>
        </div>
    );
}

export default ReviewCard;
