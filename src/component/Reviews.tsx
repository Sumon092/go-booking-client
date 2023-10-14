import Review from "./Review";

const Reviews = () => {
  return (
    <div className="pl-24 pr-24 mt-20 flex gap-5">
      <Review name="John Doe" comment="Great product!" stars={3} />
      <Review name="John Doe" comment="Great product!" stars={2} />
      <Review name="John Doe" comment="Great product!" stars={5} />
      <Review name="John Doe" comment="Great product!" stars={4} />
      
    </div>
  );
};

export default Reviews;
