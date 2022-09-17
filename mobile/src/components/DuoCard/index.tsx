import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { THEME } from "../../theme"
import { DuoInfo } from "../DuoInfo"

import { GameController } from "phosphor-react-native"

import { styles } from "./styles"

export interface DuoCardProps {
    hourEnd: string
    hourstart: string
    id: string
    name: string
    useVoiceChannel: boolean
    weekDays: string[]
    yearsPlaying: number
}

interface Props {
    data: DuoCardProps
    onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
    return (
        <View style={styles.container}>
            <DuoInfo value={data.name} label="Nome" />
            <DuoInfo value={`${data.yearsPlaying} anos`} label="Tempo de jogo" />
            <DuoInfo
                value={`${data.weekDays.length} dias \u2022 ${data.hourstart} - ${data.hourEnd} `}
                label="Disponibilidade"
            />
            <DuoInfo
                value={data.useVoiceChannel ? "Sim" : "Não"}
                label="Chamada de áudio"
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity style={styles.button} onPress={onConnect}>
                <GameController color={THEME.COLORS.TEXT} size={20} />

                <Text style={styles.buttonTitle}>Conectar</Text>
            </TouchableOpacity>
        </View>
    )
}
