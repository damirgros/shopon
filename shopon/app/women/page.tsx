import clientPromise from "../../lib/mongodb";
import Navigation from "../../components/Navigation";
import Card from "../../components/Card";
import styles from "../../styles/women.module.css";
import { WithId, Document } from "mongodb";

interface Item {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const transformDocument = (doc: WithId<Document>): Item => ({
  _id: doc._id.toString(),
  name: doc.name as string,
  price: doc.price as number,
  image: doc.image as string,
});

const WomenPage = async () => {
  let items: Item[] = [];

  try {
    const client = await clientPromise;
    const db = client.db("shopon");
    const documents = await db.collection("women").find({}).toArray();

    items = documents.map(transformDocument);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
  }

  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default WomenPage;
