import React, { useState } from "react"
import {
    View,
    Modal,
    ModalProps,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native"
import { styles } from "./styles"

import { MaterialIcons } from "@expo/vector-icons"
import { CheckCircle } from "phosphor-react-native"
import { THEME } from "../../theme"
import { Heading } from "../Heading"

import * as Clipboard from "expo-clipboard"

interface Props extends ModalProps {
    discord: string
    onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyDiscordToClipboard() {
        setIsCopping(true)
        await Clipboard.setStringAsync(discord)

        Alert.alert("Discord Copiado!", "Usuário copiado com sucesso!")
        setIsCopping(false)
    }

    return (
        <Modal animationType="fade" {...rest} transparent statusBarTranslucent>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                        <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500} />
                    </TouchableOpacity>

                    <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

                    <Heading
                        title="Let's play!"
                        subtitle="Agora é só começar a jogar!"
                        style={{ alignItems: "center", marginTop: 24 }}
                    ></Heading>
                    <Text style={styles.label}></Text>

                    <TouchableOpacity
                        onPress={handleCopyDiscordToClipboard}
                        style={styles.discordButton}
                        disabled={isCopping}
                    >
                        <Text style={styles.discord}>
                            {isCopping ? (
                                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
                            ) : (
                                discord
                            )}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
