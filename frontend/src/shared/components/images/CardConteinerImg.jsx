import { Card, CardContent } from "@mui/material"

const CardConteinerImg = ({
    children,
    styleCard,
    styleCardContent
}) => {
    return (
        <>
            <Card
                style={styleCard}
            >
                <CardContent
                    style={styleCardContent}
                >
                    {children}
                </CardContent>
            </Card>
        </>
    )
}

export default CardConteinerImg