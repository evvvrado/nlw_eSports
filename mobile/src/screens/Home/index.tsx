import React from "react"
import { View, Image, FlatList } from "react-native"
import { styles } from "./styles"
import logoImg from "../../assets/logo-nlw-esports.png"
import { Heading } from "../../components/Heading"
import { GameCard } from "../../components/GameCard"

import { GAMES } from "../../utils/games"

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />

            <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

            <FlatList
                style={{ maxWidth: "100%" }}
                data={GAMES}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <GameCard data={item}></GameCard>}
            />
        </View>
    )
}
