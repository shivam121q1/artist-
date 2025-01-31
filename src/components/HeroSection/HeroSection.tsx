import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  tagLine: string;
  brandName: string;
}

export default function HeroSection({ tagLine, brandName }: HeroSectionProps) {
  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          'url(https://s3-alpha-sig.figma.com/img/b697/891c/20c7115ac77e7bbfb570051fee49705f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZ1nj-vHQ1Ef4ffSmhsL5e1E9aenm689VamsPqxct66V-zQNSMyZKo1HbQAdQeONDWieFVE72d6PEr1KLW~jNvEchUhfp0q2LasKQviWrcfHm43OF8BUm0bEaofnI7cPfvcasIAeA0PL1uNRvGtXUAQH7P70tpjO2lo~N5FFbjXMY8HLcvaR~HO461vqM9iAQRdXzawfvpTCeTx8ACjfx76MoY1ujrjflxbdRpWSZc6v8nx8YJOUU1o2cRA56IcnEhjSZGuthL4~ZKnfL4u-Grvo9rhtds5sUhGrFgxI49RjQJty-Nt-zxCuZvWAAfGYWR9ud8HykiGrRyEYvp3rBQ__)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-20"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-6 sm:px-8 max-w-4xl mr-auto ml-20">
        <div className="flex flex-col gap-4 items-start max-w-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {brandName}
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {tagLine}
          </h3>
          <Button className="bg-red-500 text-white px-6 py-3 sm:px-4 sm:py-2 font-semibold rounded-lg hover:bg-red-600">
            Upcoming Event
          </Button>
        </div>
      </div>
    </div>
  );
}
