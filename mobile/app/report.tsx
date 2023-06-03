import { SafeAreaView, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

import { Link, useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { api } from '../src/lib/api'
import { Double } from 'react-native/Libraries/Types/CodegenTypes'
import { BarChart } from 'react-native-chart-kit';

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
  id: string
  historicoConsumo: string
  inicioFabricacao: Date
  fimFabricacao: Date
  gravidade: string
  usoAgua: Double
  produto: Produto
  recurso: Recurso
}

export default function NewReport() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()
  const [data, setData] = useState<Data[]>([])

  async function signOut() {
    router.push('/')
  }

  async function loadData() {
    try {
      const response = await api.get('/report', {})
      setData(response.data)
    } catch (error) {
      console.error('Ocorreu um erro na solicitação:', error)
    }
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
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={signOut}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <Icon name="log-out" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-6 space-y-10">
        <>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100" style={styles.header}>Relatório de consumo de água</Text>
          <BarChart
            data={{
              labels: ['Janeiro', 'Fevereiro', 'Março'],
              datasets: [
                {
                  data: [150, 200, 2730],
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel={'L'}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});

