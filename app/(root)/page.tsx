import Hello from "../../components/hello"

const Home = () => {
  return (
    <main>
      <div className="text-5xl mt-8">Home page</div>
      <div className="mt-8"> 
        <Hello />
      </div>
    </main>
  )
}

export default Home