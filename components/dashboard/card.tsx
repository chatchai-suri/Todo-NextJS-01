type CardProps = {
  title: string;
  amount: number;
}

export default function Card({ title, amount }: CardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h2>{title}</h2>
      <p className="text-center bg-white text-3xl rounded-lg mt-4 py-8">{amount}</p>
    </div>
  );
}
