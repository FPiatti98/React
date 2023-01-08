import React from "react";

const Spinner= () => {
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div class="spinner-border text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Spinner;
