async function fetchAmiibos() {
  const res = await fetch("https://www.amiiboapi.com/api/amiibo");
  const data = await res.json();
  return data;
}

async function Home() {
  const amiibos = await fetchAmiibos();

  return (
    <div className="amiibo-container">
      {amiibos.amiibo.map((amiibo: any) => (
        <div key={amiibo.head + amiibo.tail} className="amiibo-item">
          <h5>{amiibo.name}</h5>
          <img src={amiibo.image} alt="" className="amiibo-image" />
        </div>
      ))}
    </div>
  );
}

export default Home;
