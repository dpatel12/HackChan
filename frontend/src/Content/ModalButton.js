class ModalButton extends React.Component {
    render() {
        return (
            <>
            <Button variant="light" size="lg" active block class="modalbutton">
                Entry 1
            </Button>
            <Button variant="light" size="lg" active block id="modalbutton">
                Entry 2
            </Button>
            <Button variant="light" size="lg" active block id="modalbutton">
                Entry 3
            </Button>
            <Button variant="light" size="lg" active block id="modalbutton">
                Entry 4
            </Button>
            <Button variant="light" size="lg" active block id="modalbutton">
                Entry 5
            </Button>
            <Button variant="light" size="lg" active block id="modalbutton">
                Entry 6
            </Button>
            <Button variant="light" size="lg" active block id="modalbutton">
                Entry 6
            </Button>
            </>
        );
    }
}

ReactDOM.render(<ModalButton />, document.getElementById("mainBodyDiv"));