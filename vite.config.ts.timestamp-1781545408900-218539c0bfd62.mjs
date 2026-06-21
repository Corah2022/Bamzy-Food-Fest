// vite.config.ts
import { defineConfig } from "file:///C:/Users/DELL/Documents/artsfestivity.vercel.app/artsfestivity.vercel.app/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/DELL/Documents/artsfestivity.vercel.app/artsfestivity.vercel.app/node_modules/@vitejs/plugin-react/dist/index.js";
import tsconfigPaths from "file:///C:/Users/DELL/Documents/artsfestivity.vercel.app/artsfestivity.vercel.app/node_modules/vite-tsconfig-paths/dist/index.js";
import { traeBadgePlugin } from "file:///C:/Users/DELL/Documents/artsfestivity.vercel.app/artsfestivity.vercel.app/node_modules/vite-plugin-trae-solo-badge/dist/vite-plugin.esm.js";
var vite_config_default = defineConfig({
  build: {
    sourcemap: "hidden"
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "react-dev-locator"
        ]
      }
    }),
    traeBadgePlugin({
      variant: "dark",
      position: "bottom-right",
      prodOnly: true,
      clickable: true,
      clickUrl: "https://www.trae.ai/solo?showJoin=1",
      autoTheme: true,
      autoThemeTarget: "#root"
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxERUxMXFxcXERvY3VtZW50c1xcXFxhcnRzZmVzdGl2aXR5LnZlcmNlbC5hcHBcXFxcYXJ0c2Zlc3Rpdml0eS52ZXJjZWwuYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxERUxMXFxcXERvY3VtZW50c1xcXFxhcnRzZmVzdGl2aXR5LnZlcmNlbC5hcHBcXFxcYXJ0c2Zlc3Rpdml0eS52ZXJjZWwuYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ERUxML0RvY3VtZW50cy9hcnRzZmVzdGl2aXR5LnZlcmNlbC5hcHAvYXJ0c2Zlc3Rpdml0eS52ZXJjZWwuYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgeyB0cmFlQmFkZ2VQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi10cmFlLXNvbG8tYmFkZ2UnO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiAnaGlkZGVuJyxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAncmVhY3QtZGV2LWxvY2F0b3InLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB0cmFlQmFkZ2VQbHVnaW4oe1xuICAgICAgdmFyaWFudDogJ2RhcmsnLFxuICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgICAgcHJvZE9ubHk6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBjbGlja1VybDogJ2h0dHBzOi8vd3d3LnRyYWUuYWkvc29sbz9zaG93Sm9pbj0xJyxcbiAgICAgIGF1dG9UaGVtZTogdHJ1ZSxcbiAgICAgIGF1dG9UaGVtZVRhcmdldDogJyNyb290J1xuICAgIH0pLCBcbiAgICB0c2NvbmZpZ1BhdGhzKClcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlaLFNBQVMsb0JBQW9CO0FBQ3RiLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLHVCQUF1QjtBQUdoQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxJQUNuQixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
