import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import * as SecureStore from 'expo-secure-store'

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link, useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { api } from '../src/lib/api'
import { Double } from 'react-native/Libraries/Types/CodegenTypes'

dayjs.locale(ptBR)

interface Produto {
  condigo: string
  nome: string
  tipoLinha: string
}

interface Recurso {
  codigo: string
  nome: string
  quantidadeUsoRecurso: Double
}

interface Data {
  historicoConsumo: string
  inicioFabricacao: Date
  fimFabricacao: Date
  usoAgua: Double
  produto : Produto
  recurso: Recurso
}

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()
  const [data, setData] = useState<Data[]>([])

  async function signOut() {
    router.push('/')
  }

  async function loadData() {
    const token = await SecureStore.getItemAsync('token')

    const response = await api.get('/report', {})

    setData(response.data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between px-8">
        {/* <Logo /> */}

        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={signOut}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <Icon name="log-out" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
{/* Conectar com o banco de dados para puxar os valores e montar o relatório trocar o memories.map por data.map*/}
      {/* <View className="mt-6 space-y-10">
        {memories.map((memory) => {
          return (
            <View key={memory.id} className="space-y-4">
              <View className="flex-row items-center gap-2">
                <View className="h-px w-5 bg-gray-50" />
                <Text className="font-body text-sm text-gray-100">
                  {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
                </Text>
              </View>
              <View className="space-y-4 px-8">
                <Image
                  source={{
                    uri: memory.coverUrl,
                  }}
                  className="aspect-video w-full rounded-lg"
                  alt=""
                />
                <Text className="font-body text-base leading-relaxed text-gray-100">
                  {memory.excerpt}
                </Text>
                <Link href="/memories/id" asChild>
                  <TouchableOpacity className="flex-row items-center gap-2">
                    <Text className="font-body text-sm text-gray-200">
                      Ler mais
                    </Text>
                    <Icon name="arrow-right" size={16} color="#9e9ea0" />
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          )
        })}
      </View> */}
    </ScrollView>
  )
}