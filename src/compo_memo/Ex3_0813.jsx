import React, { useState, useMemo } from 'react';

const users = [
    { id: 1, name: "Kim", active: true },
    { id: 2, name: "Lee", active: false },
    { id: 3, name: "Park", active: true }
]

const Ex3_0813 = () => {
    const [showActive, setshowActive] = useState(true);

    const filteredUsers = useMemo(() => {
        console.log("필터링중")
        return users.filter((user) => user.active === showActive)
    }, [showActive])

    return (
        <div>
            <button onClick={() => setshowActive((a) => !a)}>
                {showActive ? "비활성" : "활성"} 사용자 보기
            </button >
            <ul>
                {filteredUsers.map((u) =>
                    <li key={u.id}>{u.name}</li>
                )}
            </ul>
        </div >
    );
};

export default Ex3_0813;