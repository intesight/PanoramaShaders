precision mediump float;
uniform sampler2D sTexture;
varying vec2 vTexture;
void main()
{
   vec4 color = texture2D(sTexture,vTexture);
   gl_FragColor=color;
   //gl_FragColor=vec4(1.0,0.0,0.0,1.0);
}
