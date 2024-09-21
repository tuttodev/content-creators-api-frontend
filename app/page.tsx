import {TryNowSection} from "@/app/_components/TryNowSection";
import {ContentCreatorsSliderSection} from "@/app/_components/ContentCreatorsSliderSection";

export default function Home() {
  return (
    <main>
        <div className='grid grid-cols-2 gap-4 mt-20 container mx-auto'>
            <div>
                <TryNowSection />
            </div>
            <div>
                <ContentCreatorsSliderSection />
            </div>
        </div>
    </main>
  );
}
