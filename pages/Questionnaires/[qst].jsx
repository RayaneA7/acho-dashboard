import Statistics from "@/components/Home/Statistics";
import DonutChart from "@/components/Qsts/Question";

export default function Questionnaire() {
  return (
    <div className="bg-white py-20 px-20 lg:px-[180px]">
      <div className="hero bg-opacity-50  min-h-[200px] mb-16">
        {" "}
        <div className="max-w-[1920px] mx-auto flex justify-center pt-16">
          <h1 className="font-bold md:text-[48px] lg:text-[60px] ml-6 text-left">
            Qualite de connexion internet{" "}
            <span className="text-bleu1 lg:text-clip block">
              {" "}
              [Deuxieme quinizaine mai 2023]
            </span>
          </h1>{" "}
        </div>
      </div>
      <div className="md:pb-8">
        <Statistics></Statistics>
      </div>
      <div>
        <DonutChart/>
      </div>
    </div>
  );
}
