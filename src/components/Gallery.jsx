import data from "../data";
import Card from "./Card";
import '../style/components/gallery.scss'

const Gallery = () => {
  return (
    <main className="home_gallery">
      {data.map((donnee) => (
        <Card key={donnee.id} id={donnee.id} title={donnee.title} cover={donnee.cover} />
      ))}
    </main>
  );
};

export default Gallery;
