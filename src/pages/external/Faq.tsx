import Accordion from "../../components/common/Accordion"
import Jumbotron from "../../components/common/Jumbotron"
import ExternalLayout from "../layouts/ExternalLayout"


const FaqPage = () => {
    return <ExternalLayout title="Baksara | FAQ">
        <Jumbotron>
            <span>Frequently <br /> Asked<br /> Questions</span>
        </Jumbotron>
        <div className="w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 mt-24 gap-10 text-primary dark:primary-dark">
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">Lorem Ipsum 1</h1>
                <Accordion
                    title="Lorem 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
                <Accordion
                    title="Lorem 2"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
                <Accordion
                    title="Lorem 3"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
                <Accordion
                    title="Lorem 4"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">Lorem Ipsum 2</h1>
                <Accordion
                    title="Lorem 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
                <Accordion
                    title="Lorem 2"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">Lorem Ipsum 3</h1>
                <Accordion
                    title="Lorem 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
                <Accordion
                    title="Lorem 2"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
                <Accordion
                    title="Lorem 3"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />

            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-family-secondary font-bold text-3xl">Lorem Ipsum 4</h1>
                <Accordion
                    title="Lorem 1"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur quidem minima fugit ratione quas impedit eius error harum, explicabo facilis consequuntur ad omnis excepturi laudantium a aspernatur laborum fuga. Aliquid adipisci amet, nemo perspiciatis est quisquam aliquam neque sequi vitae, in omnis porro beatae! Laboriosam sed velit tenetur explicabo!"
                />
            </div>
        </div>


    </ExternalLayout>
}

export default FaqPage