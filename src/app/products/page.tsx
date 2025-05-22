import ProductListItem from "@/components/productListItem";
import Searchbar from "@/components/searchbar";

const index = () => {
  const produce = [
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
    {
      name: "apple",
      price: "10",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: 1
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mt-10"> 
      <h1>Beställ produkter online</h1>
      <div>kategori</div>
      <div>
        <Searchbar />
      </div>
      </div>
      <div className="grid grid-cols-3 justify-center items-center px-10">
        {produce.map((p, i) => (
          <ProductListItem key={i} produce={p} />
        ))}
      </div>
    </div>
  );
};

export default index;
