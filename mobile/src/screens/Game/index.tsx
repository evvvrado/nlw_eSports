import React from "react"
import { useState, useEffect } from "react"
import { TouchableOpacity, View, Image, FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Background } from "../../components/Background"
import { useNavigation, useRoute } from "@react-navigation/native"
import { styles } from "./styles"
import { GameParams } from "../../@types/navigation"

import logoImg from "../../assets/logo-nlw-esports.png"

import { Entypo } from "@expo/vector-icons"
import { THEME } from "../../theme"
import { Heading } from "../../components/Heading"
import { DuoCard, DuoCardProps } from "../../components/DuoCard"
import { DuoMatch } from "../../components/DuoMatch"

export function Game() {
    const navigation = useNavigation()
    const route = useRoute()
    const game = route.params as GameParams

    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected] = useState("")

    function handleGoBack() {
        navigation.goBack()
    }

    async function getDiscordUser(adsId: string) {
        fetch(`http://192.168.1.105:3333/ads/${adsId}/discord`)
            .then((response) => response.json())
            .then((data) => setDiscordDuoSelected(data.discord))
    }

    useEffect(() => {
        fetch(`http://192.168.1.105:3333/games/${game.id}/ads`)
            .then((response) => response.json())
            .then((data) => setDuos(data))
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />

                    <View style={styles.right}></View>
                </View>

                <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />

                <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

                <FlatList
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    data={duos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>N??o h?? an??ncios</Text>
                    )}
                />

                <DuoMatch
                    visible={discordDuoSelected.length > 0}
                    discord={discordDuoSelected}
                    onClose={() => setDiscordDuoSelected("")}
                />
            </SafeAreaView>
        </Background>
    )
}
