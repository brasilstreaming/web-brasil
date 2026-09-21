# Brasil Streaming Native V20

Branch isolada para compilação do aplicativo Android nativo.

- Kotlin + Jetpack Compose
- Media3 / ExoPlayer
- Sem WebView como base da interface
- applicationId preservado: com.brasilstreaming.tv.smooth4
- Build automático: .github/workflows/android-native-v20.yml

O arquivo source.zip.b64 contém o source Android corrigido. O workflow restaura o ZIP, compila o módulo app e publica app-debug.apk como artefato.
