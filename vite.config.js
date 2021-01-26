import reactRefresh from '@vitejs/plugin-react-refresh'
import { babel } from '@rollup/plugin-babel'
/**
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [  
    babel({
      plugins: ["@babel/plugin-syntax-jsx"]
  }), reactRefresh()]
}
