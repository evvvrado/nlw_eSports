import React from "react"
import { useEffect, useState } from "react"
import { Image, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import logoImg from "../../assets/logo-nlw-esports.png"

import { Heading } from "../../components/Heading"
import { GameCard, GameCardProps } from "../../components/GameCard"
import { SafeAreaView } from "react-native-safe-area-context"
import { Background } from "../../components/Background"

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([])

    const navigation = useNavigation()

    function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
        navigation.navigate("game", { id, title, bannerUrl })
    }

    useEffect(() => {
        fetch("http://192.168.1.105:3333/games")
            .then((response) => response.json())
            .then((data) => setGames(data))
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.logo} />

                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList
                    style={{ maxWidth: "100%" }}
                    data={games}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <GameCard onPress={() => handleOpenGame(item)} data={item}></GameCard>
                    )}
                />
            </SafeAreaView>
        </Background>
    )
}
