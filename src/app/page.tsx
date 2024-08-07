export default function Home() {
  const products: Products.Item[] = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
      price: 0,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      image: "https://via.placeholder.com/150",
      price: 0
    }
  ]
  const orders: Orders.Order[] = [
    {
      id: 1,
      items: [
        {
          id: 1,
          name: "Product 1",
          description: "Description 1",
          image: "https://via.placeholder.com/150",
          price: 0,
          quantity: 0,
          total: 0          
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description 2",
          image: "https://via.placeholder.com/150",
          price: 0,
          quantity: 0,
          total: 0
        }
      ],
      total: 0
    }
  ]
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
