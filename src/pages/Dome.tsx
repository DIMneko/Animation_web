import DemoModel from "../components/DemoModel";
const DemoPage = () => {

    return(
    <>
    <div className="w-full h-screen demo_hero">
        <DemoModel/>
        <h3>Hello World</h3>
    </div>
    <section className="demo w-full h-[1500px]"></section>
    </>)
}

export default DemoPage;
