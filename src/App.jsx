import { useState } from 'react'


export default function App() {
const [env, setEnv] = useState({
vercel: !!import.meta.env.VITE_DEPLOY_TARGET?.includes('vercel'),
netlify: !!import.meta.env.VITE_DEPLOY_TARGET?.includes('netlify'),
})


return (
<main style={{
fontFamily: 'ui-sans-serif, system-ui, -apple-system',
minHeight: '100dvh', display: 'grid', placeItems: 'center'
}}>
<section style={{ textAlign: 'center' }}>
<h1>🚀 FE Deploy Demo</h1>
<p>환경 변수: <code>VITE_DEPLOY_TARGET</code></p>
<p>
현재 배포 대상: {env.vercel && 'Vercel '} {env.netlify && 'Netlify '}
{!env.vercel && !env.netlify && '로컬/기타'}
</p>
<p style={{opacity:.7}}>src/App.jsx 수정 → Git push → 자동 배포 변화를 확인해보세요.</p>
</section>
</main>
)
}