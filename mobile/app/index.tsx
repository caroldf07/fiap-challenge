import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'


import Logo from '../src/assets/kraft-heinz-logo.svg'

export default function App() {
  const router = useRouter()
  return (
    <View className="flex-1 items-center px-8 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        {/* <Logo /> */}

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Kraft-Heinz Monitoramento Ambiental
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Acompanhe a utilização de recursos sustentáveis por linha de produto.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-red-50 px-5 py-2"
          onPress={() => router.push('/report')}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Ver relatório
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Todos os direitos reservados © 2023
      </Text>
    </View>
  )
}
