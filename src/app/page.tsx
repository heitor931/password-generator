import Password from "@/components/Password";

function Home() {
  return (
    <div className="flex flex-col mt-4 justify-center items-center">
      <h1 className="text-3xl w-fit text-black p-2 rounded-md bg-yellow-500">
        Password Generator
      </h1>
      <Password passwordName="" />
    </div>
  );
}

export default Home;