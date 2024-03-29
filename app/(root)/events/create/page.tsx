import CreateEventForm from "@/components/shared/CreateEventForm"

const CreateEventPage = () => {
    return (
        <div>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <h3 className="wrapper h3-bold text-center sm:text-left">Create an Event</h3>
            </section>

            <div className="wrapper my-8">
                <CreateEventForm />
            </div>
        </div>
    );
}

export default CreateEventPage