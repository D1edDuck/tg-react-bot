    import React from "react";
    import Button from "./components/button/button";
    import {useTelegram} from "./components/hooks/useTelegram"

    const Header = () => {
        const {user, onClose} = useTelegram();

        return (
            <div className={'header'}>
                <Button onClick={onClose}>Закрыть</Button>
                <span className={'username'}>
                    {user?.username}
                </span>
            </div>
        )
    }

    export default Header;