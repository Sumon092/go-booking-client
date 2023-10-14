
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#4ca2cd] text-white p-20 mt-8">
      <div className="flex justify-between">
        
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Pricing</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li>List your staying</li>
            <li>Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <FacebookFilled />
          <InstagramFilled />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; Go {year}</p>
      </div>
    </div>
  );
}
