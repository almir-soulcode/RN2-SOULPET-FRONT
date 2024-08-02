import banner from "../assets/banner-home.png";

function Home() {
  return (
    <main>
      <div className="home">
        <img src={banner} alt="SoulPet Banner" className="w-100" />
      </div>
    </main>
  );
}

export default Home;
