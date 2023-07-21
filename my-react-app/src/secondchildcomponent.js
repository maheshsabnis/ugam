const SecondChildComponent=(props)=>{
     return (
        <div className="container">
            <h4>
                The Second Child Component
                <br/>
                {props.msg1}
            </h4>
        </div>
     );
};
/* Exporting the Compoennt so that its will be impprted */
export default SecondChildComponent;