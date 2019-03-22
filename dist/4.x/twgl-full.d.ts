
export type Defaults = {
    attribPrefix?: string;
    textureColor?: number[];
    crossOrigin?: string;
    addExtensionsToContext?: boolean;
};
export function setDefaults(newDefaults: Defaults): void;
export function addExtensionsToContext(gl: WebGLRenderingContext): void;
export function getWebGLContext(canvas: HTMLCanvasElement, opt_attribs?: WebGLContextAttributes): WebGLRenderingContext;
export function createContext(canvas: HTMLCanvasElement): WebGLRenderingContext;
export function getContext(canvas: HTMLCanvasElement, opt_attribs?: WebGLContextAttributes): WebGLRenderingContext;
export function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement, multiplier?: number): boolean;
export type AttribInfo = {
    value?: number[] | ArrayBufferView;
    numComponents?: number;
    size?: number;
    type?: number;
    normalize?: boolean;
    offset?: number;
    stride?: number;
    divisor?: number;
    buffer: WebGLBuffer;
    drawType?: number;
};
export type FullArraySpec = {
    value?: number[] | ArrayBufferView;
    data: number | number[] | ArrayBufferView;
    numComponents?: number;
    type?: Function;
    size?: number;
    normalize?: boolean;
    stride?: number;
    offset?: number;
    divisor?: number;
    attrib?: string;
    name?: string;
    attribName?: string;
    buffer?: WebGLBuffer;
};
export type ArraySpec = number | number[] | ArrayBufferView | FullArraySpec;
export type Arrays = {
    [key: string]: ArraySpec;
};
export type BufferInfo = {
    numElements: number;
    elementType?: number;
    indices?: WebGLBuffer;
    attribs?: {
        [key: string]: AttribInfo;
    };
};
export type DrawObject = {
    active?: boolean;
    type?: number;
    programInfo: ProgramInfo;
    bufferInfo?: BufferInfo;
    vertexArrayInfo?: VertexArrayInfo;
    uniforms: {
        [key: string]: any;
    };
    offset?: number;
    count?: number;
    instanceCount?: number;
};
export type AttachmentOptions = {
    attach?: number;
    format?: number;
    type?: number;
    target?: number;
    level?: number;
    attachment?: WebGLObject;
};
export type FramebufferInfo = {
    framebuffer: WebGLFramebuffer;
    attachments: WebGLObject[];
};
export type ErrorCallback = (msg: string, lineOffset?: number) => void;
export type ProgramOptions = {
    errorCallback?: (...params: any[]) => any;
    attribLocations?: {
        [key: string]: number;
    };
    transformFeedbackVaryings?: BufferInfo | {
        [key: string]: AttribInfo;
    } | string[];
    transformFeedbackMode?: number;
};
export type TransformFeedbackInfo = {
    index: number;
    type: number;
    size: number;
};
export function createTransformFeedbackInfo(gl: WebGLRenderingContext, program: WebGLProgram): {
    [key: string]: TransformFeedbackInfo;
};
export function bindTransformFeedbackInfo(gl: WebGLRenderingContext, transformFeedbackInfo: ProgramInfo | {
    [key: string]: TransformFeedbackInfo;
}, bufferInfo?: BufferInfo | {
    [key: string]: AttribInfo;
}): void;
export function createTransformFeedback(gl: WebGLRenderingContext, programInfo: ProgramInfo, bufferInfo?: BufferInfo | {
    [key: string]: AttribInfo;
}): WebGLTransformFeedback;
export type UniformData = {
    type: number;
    size: number;
    blockNdx: number;
    offset: number;
};
export type BlockSpec = {
    index: number;
    size: number;
    uniformIndices: number[];
    usedByVertexShader: boolean;
    usedByFragmentShader: boolean;
    used: boolean;
};
export type UniformBlockSpec = {
    uniformData: UniformData[];
};
export type UniformBlockInfo = {
    name: string;
    array: ArrayBuffer;
    asFloat: Float32Array;
    buffer: WebGLBuffer;
    offset?: number;
    uniforms: {
        [key: string]: ArrayBufferView;
    };
};
export type ProgramInfo = {
    program: WebGLProgram;
    uniformSetters: {
        [key: string]: (...params: any[]) => any;
    };
    attribSetters: {
        [key: string]: (...params: any[]) => any;
    };
    transformFeedbackInfo?: {
        [key: string]: TransformFeedbackInfo;
    };
};
export type TextureFunc = (gl: WebGLRenderingContext, options: TextureOptions) => any;
export type TextureOptions = {
    target?: number;
    level?: number;
    width?: number;
    height?: number;
    depth?: number;
    min?: number;
    mag?: number;
    minMag?: number;
    internalFormat?: number;
    format?: number;
    type?: number;
    wrap?: number;
    wrapS?: number;
    wrapT?: number;
    wrapR?: number;
    minLod?: number;
    maxLod?: number;
    baseLevel?: number;
    maxLevel?: number;
    unpackAlignment?: number;
    premultiplyAlpha?: number;
    flipY?: number;
    colorspaceConversion?: number;
    color?: number[] | ArrayBufferView;
    auto?: boolean;
    cubeFaceOrder?: number[];
    src?: number[] | ArrayBufferView | TexImageSource | TexImageSource[] | string | string[] | TextureFunc;
    crossOrigin?: string;
};
export type TextureSrc = HTMLImageElement | HTMLImageElement[];
export type TextureReadyCallback = (err: any, texture: WebGLTexture, souce: TextureSrc) => void;
export type TexturesReadyCallback = (err: any, textures: {
    [key: string]: WebGLTexture;
}, sources: {
    [key: string]: TextureSrc;
}) => void;
export type CubemapReadyCallback = (err: any, tex: WebGLTexture, imgs: HTMLImageElement[]) => void;
export type ThreeDReadyCallback = (err: any, tex: WebGLTexture, imgs: HTMLImageElement[]) => void;
export function isWebGL2(gl: WebGLRenderingContext): boolean;
export function isWebGL1(gl: WebGLRenderingContext): boolean;
export function glEnumToString(gl: WebGLRenderingContext, value: number): string;
export type VertexArrayInfo = {
    numElements: number;
    elementType?: number;
    vertexArrayObject?: WebGLVertexArrayObject;
};
export function setAttribInfoBufferFromArray(gl: WebGLRenderingContext, attribInfo: AttribInfo, array: ArraySpec, offset?: number): void;
export function createBufferInfoFromArrays(gl: WebGLRenderingContext, arrays: Arrays, srcBufferInfo?: BufferInfo): BufferInfo;
export function drawBufferInfo(gl: WebGLRenderingContext, bufferInfo: BufferInfo | VertexArrayInfo, type?: number, count?: number, offset?: number, instanceCount?: number): void;
export function drawObjectList(gl: WebGLRenderingContext, objectsToDraw: DrawObject[]): void;
export function createFramebufferInfo(gl: WebGLRenderingContext, attachments?: AttachmentOptions[], width?: number, height?: number): FramebufferInfo;
export function resizeFramebufferInfo(gl: WebGLRenderingContext, framebufferInfo: FramebufferInfo, attachments?: AttachmentOptions[], width?: number, height?: number): void;
export function bindFramebufferInfo(gl: WebGLRenderingContext, framebufferInfo?: FramebufferInfo, target?: number): void;
export function createProgramInfo(gl: WebGLRenderingContext, shaderSources: string[], opt_attribs?: ProgramOptions | string[] | ErrorCallback, opt_errorCallback?: ErrorCallback): ProgramInfo;
export function createUniformBlockInfo(gl: WebGL2RenderingContext, programInfo: ProgramInfo, blockName: string): UniformBlockInfo;
export function bindUniformBlock(gl: WebGL2RenderingContext, programInfo: ProgramInfo | UniformBlockSpec, uniformBlockInfo: UniformBlockInfo): boolean;
export function setUniformBlock(gl: WebGL2RenderingContext, programInfo: ProgramInfo | UniformBlockSpec, uniformBlockInfo: UniformBlockInfo): void;
export function setBlockUniforms(uniformBlockInfo: UniformBlockInfo, values: {
    [key: string]: any;
}): void;
export function setUniforms(setters: ProgramInfo | {
    [key: string]: (...params: any[]) => any;
}, values: {
    [key: string]: any;
}): void;
export function setBuffersAndAttributes(gl: WebGLRenderingContext, setters: ProgramInfo | {
    [key: string]: (...params: any[]) => any;
}, buffers: BufferInfo | VertexArrayInfo): void;
export function setTextureFromArray(gl: WebGLRenderingContext, tex: WebGLTexture, src: number[] | ArrayBufferView, options?: TextureOptions): void;
export function createTexture(gl: WebGLRenderingContext, options?: TextureOptions, callback?: TextureReadyCallback): WebGLTexture;
export function resizeTexture(gl: WebGLRenderingContext, tex: WebGLTexture, options: TextureOptions, width?: number, height?: number): void;
export function createTextures(gl: WebGLRenderingContext, options: {
    [key: string]: TextureOptions;
}, callback?: TexturesReadyCallback): {
    [key: string]: WebGLTexture;
};

