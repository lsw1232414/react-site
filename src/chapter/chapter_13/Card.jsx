function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
                color: "black", // 글자색 검정으로 명시
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}


export default Card;
