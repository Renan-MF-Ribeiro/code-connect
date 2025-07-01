import { CardPost } from '@components/CardPost'

const post = {
  id: 10,
  cover:
    'https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/sass-simplificando-o-css.png',
  title: 'Sass: Simplificando o CSS',
  slug: 'sass-simplificando-o-css',
  body: 'Este post explora como o pré-processador Sass pode simplificar e melhorar a escrita de CSS, através de variáveis, mixins e funções.',
  markdown:
    '```scss\n$primary-color: #333;\nbody {\n  color: $primary-color;\n}\n```',
  author: {
    id: 101,
    name: 'Ana Beatriz',
    username: 'anabeatriz_dev',
    avatar:
      'https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png'
  }
}

export default function Home() {
  return (
    <div className="bg-background w-full">
      <CardPost post={post} />
    </div>
  )
}
