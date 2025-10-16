import Image from 'next/image';
import Accordion from '../components/Accordion';

export default function Home() {
  const faqItems = [
    {
      title: 'How long does it take?',
      content: 'The entire process, from starting the survey to completing the offers, can take as little as 30 minutes. You will receive your gift card within 24-48 hours of completion.',
    },
    {
      title: 'What kind of offers are required?',
      content: 'Offers typically include downloading free apps, signing up for free trials, or completing short surveys. You can choose the offers that interest you the most.',
    },
    {
      title: 'How will I get the gift card?',
      content: 'Your $100 Crumbl gift card will be delivered to the email address you provide.',
    },
    {
      title: 'Is this really free?',
      content: 'Yes, this is completely free. You will never be asked for any payment information.',
    },
    {
      title: 'Can I do this more than once?',
      content: 'This offer is limited to one per person.',
    },
  ];

  return (
    <main className="bg-white">
      <header className="absolute top-0 right-0 p-4">
        <h1 className="font-poppins text-2xl font-bold">Crumbl</h1>
      </header>

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#FFC0CB]">
        <h2 className="font-montserrat text-5xl font-bold text-black">Get a $100 Crumbl Gift Card</h2>
        <p className="font-lato text-lg mt-4">Review your favorite cookie flavors and earn a $100 gift card as a thank you for your feedback.</p>
        <button className="bg-black text-white font-bold py-4 px-8 mt-8">START NOW</button>
        <div className="mt-8">
          <div className="inline-block bg-gray-100 rounded-lg px-4 py-2">
            <p className="text-sm">✅ Marcus from Austin, TX just claimed her $100 reward</p>
          </div>
          <div className="inline-block bg-gray-100 rounded-lg px-4 py-2 ml-4">
            <p className="text-sm">👥 850 users browsing now</p>
          </div>
        </div>
        <div className="mt-8 relative">
          <Image src="/gift-card.svg" alt="Crumbl Gift Card" width={400} height={250} />
          <div className="absolute top-0 right-0 bg-white rounded-full p-2">
            <p className="text-xs">✔️ Verified by TikTok</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center font-montserrat text-black">How It Works</h2>
        <p className="text-lg text-center mt-4 font-lato text-black">Five simple steps to earn your Crumbl gift card</p>
        <div className="grid md:grid-cols-5 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl">🪄</div>
            <h3 className="font-bold text-xl mt-4 font-poppins text-black">Click &apos;START NOW&apos;</h3>
            <p className="mt-2 font-lato text-black">Begin your journey to earning a $100 Crumbl gift card</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">✉️</div>
            <h3 className="font-bold text-xl mt-4 font-poppins text-black">Enter your email and cookie preferences</h3>
            <p className="mt-2 font-lato text-black">Tell us about your favorite Crumbl flavors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">📋</div>
            <h3 className="font-bold text-xl mt-4 font-poppins text-black">Complete the Crumbl flavor survey</h3>
            <p className="mt-2 font-lato text-black">Share your honest feedback about cookie experiences</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">✔️</div>
            <h3 className="font-bold text-xl mt-4 font-poppins text-black">Finish 5+ simple offers</h3>
            <p className="mt-2 font-lato text-black">Complete quick tasks like app downloads or surveys</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">🎁</div>
            <h3 className="font-bold text-xl mt-4 font-poppins text-black">Receive your $100 Crumbl gift card</h3>
            <p className="mt-2 font-lato text-black">Get your reward delivered via email within 24-48 hours</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-black text-white font-bold py-4 px-8">START NOW</button>
        </div>
      </section>

      <section className="bg-[#FCE4EC] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl text-[#FFC0CB]">&quot;</div>
          <p className="text-2xl italic font-lato mt-4 text-black">&quot;Reviewed a few cookies, got my gift card two days later. I bought six boxes. No regrets.&quot;</p>
          <p className="mt-4 font-poppins text-black">— Tyler S., Scottsdale, AZ</p>
          <div className="flex justify-center mt-4">
            <span className="text-[#FFC0CB]">★</span>
            <span className="text-[#FFC0CB]">★</span>
            <span className="text-[#FFC0CB]">★</span>
            <span className="text-[#FFC0CB]">★</span>
            <span className="text-[#FFC0CB]">★</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center font-montserrat text-black">Frequently Asked Questions</h2>
        <p className="text-lg text-center mt-4 font-lato text-black">Everything you need to know about earning your reward</p>
        <div className="max-w-2xl mx-auto mt-12">
          <Accordion items={faqItems} />
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <button className="bg-black text-white font-bold py-4 px-8">START NOW</button>
      </section>
    </main>
  );
}