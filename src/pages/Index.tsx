import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Добро пожаловать!
          </h1>
          <p className="text-xl text-gray-600">
            тут будет отображаться ваш проект
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
