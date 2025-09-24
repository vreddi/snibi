import { PlaylistCard } from "~/components/playlistCard";

const pokemon =
  "https://preview.redd.it/some-textless-full-pok%C3%A9mon-card-arts-that-you-can-use-as-v0-9ofmt20woq4e1.jpg?width=640&crop=smart&auto=webp&s=1ef0e246cf1d65f242dddaa85cedc3885305fb01";

const podcast =
  "https://t4.ftcdn.net/jpg/06/35/14/93/360_F_635149317_T9CWM1j0wlxu49MASHflvkwXlIzZdh8a.jpg";

const cooking =
  "https://st2.depositphotos.com/7341970/10438/v/450/depositphotos_104388810-stock-illustration-food-and-cooking-banner.jpg";

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-[#0E0E0E] p-4">
      <h1 className="text-4xl font-bold text-white">Good afternoon</h1>
      <div className="mt-12 grid grid-cols-3 gap-12">
        <PlaylistCard
          title="Pokémon vibes"
          description="A playlist for all your Pokémon vibes"
          backgroundImage={pokemon}
          videos={[
            {
              title: "14 Behind the Scenes SECRETS in Pokémon You Don't Know!",
              channel: "HoopsandHipHop",
              image: "https://pbs.twimg.com/media/GqRyvtea4AAd0iv.jpg:large",
            },
            {
              title:
                "Pokémon - The First Movie CG Remake hits Netflix next month",
              channel: "Netflix",
              image: "https://img.youtube.com/vi/D0zYJ1RQ-fs/hqdefault.jpg",
            },

            {
              title: "11 CRAZY Changes to Pokémon Games That Almost Happened",
              channel: "hoopsvgm",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOUqPguk3wcsUspEZe1ZUWbTWWN7Y1R5TsA&s",
            },
          ]}
        />
        <PlaylistCard
          title="🎙️ Best podcasts"
          description="A playlist for all your beach vibes"
          backgroundImage={podcast}
          videos={[
            {
              title:
                "Insulin Doctor: The Fastest Way To Burn Dangerous Visceral Fat! I'm Finding Mould In My Patients!",
              channel: "The Diary Of A CEO",
              image: "https://img.youtube.com/vi/gryta3KZKU4/0.jpg",
            },
            {
              title:
                "What Bothers Physicists About Black Holes (Interview with Brian Cox)",
              channel: "Cleo Abram",
              image: "https://img.youtube.com/vi/bY1EQ6HD-ao/0.jpg",
            },

            {
              title: "Do We Have To Die? With Venki Ramakrishnan",
              channel: "StarTalk",
              image: "https://img.youtube.com/vi/O35KGzkS4VA/0.jpg",
            },
          ]}
        />
        <PlaylistCard
          title="🥘 Cooking"
          description="A playlist for all your Japanese club music"
          backgroundImage={cooking}
          videos={[
            {
              title: "Chicken Kathi Rolls, the perfect weeknight dinner.",
              channel: "Ethan Chlebowski",
              image: "https://img.youtube.com/vi/Jg6SeUBB20o/0.jpg",
            },
            {
              title: "Every Way to Cook Eggs",
              channel: "Nick's Kitchen",
              image: "https://img.youtube.com/vi/b52h7kraC3A/0.jpg",
            },

            {
              title:
                "This HIGH PROTEIN Breakfast Burrito Will Change Your Morning Forever!",
              channel: "Chef Jack Ovens",
              image: "https://img.youtube.com/vi/pM9qsrmoNy4/0.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
}
