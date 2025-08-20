import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Lim Seung Woo" backgroundColor="#ffc0cb">
            <p style={{ color: "black" }}>안녕하세요, 임승우입니다.</p>
            <p style={{ color: "black" }}>현재 리액트 챕터 13을 정리중입니다.</p>
        </Card>
    );
}


export default ProfileCard;
