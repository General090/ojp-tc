import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <div className='flex'>
      <div>
        <p>kasdjkfjskadjfkasdjfkajsdkf</p>
      </div>

      <div>
        <Image src="/Girl.jpeg" alt="girl" width={200} height={80} />
      </div>
    </div>
  );
}
