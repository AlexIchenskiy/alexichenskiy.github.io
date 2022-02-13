function Progressbar(props) {
    const style = {
        backgroundSize: "200% 100%",
        backgroundImage: `linear-gradient(to right, #838C95 50%, ${props.color} 50%)`,
        backgroundPosition: `${-props.progress}% 0`,
    }

    return (
        <div className = "progressbar" style = {style}>
        </div>
    );
}

export default Progressbar;