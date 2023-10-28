function Card() {
    return(
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="card text-white bg-primary">
                        <div class="card-header">Card 1</div>
                        This is some sample text for my card
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-white bg-success">
                        <div class="card-header">Card 1</div>
                        This is some more sample text for my card
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-white bg-danger">
                        <div class="card-header">Card 1</div>
                        This is even more sample text for my card
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card