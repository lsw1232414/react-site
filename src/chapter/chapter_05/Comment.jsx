const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // 위쪽 정렬
        alignItems: "flex-start", // 왼쪽 정렬
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: "20px", // 줄 높이 통일
    },
    commentText: {
        color: "black",
        fontSize: 16,
        lineHeight: "20px", // 줄 높이 통일
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style={styles.image}
            />
            <div style={styles.contentContainer}>
                <div style={styles.nameText}>{props.name}</div>
                <div style={styles.commentText}>{props.comment}</div>
            </div>
        </div>
    );
}

export default Comment;
