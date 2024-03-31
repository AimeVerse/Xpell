[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DUtils](../modules/X3D_X3DUtils.md) / CannonDebugRenderer

# Class: CannonDebugRenderer

[X3D/X3DUtils](../modules/X3D_X3DUtils.md).CannonDebugRenderer

## Table of contents

### Constructors

- [constructor](X3D_X3DUtils.CannonDebugRenderer.md#constructor)

### Properties

- [\_boxGeometry](X3D_X3DUtils.CannonDebugRenderer.md#_boxgeometry)
- [\_cylinderGeometry](X3D_X3DUtils.CannonDebugRenderer.md#_cylindergeometry)
- [\_material](X3D_X3DUtils.CannonDebugRenderer.md#_material)
- [\_meshes](X3D_X3DUtils.CannonDebugRenderer.md#_meshes)
- [\_particleGeometry](X3D_X3DUtils.CannonDebugRenderer.md#_particlegeometry)
- [\_particleMaterial](X3D_X3DUtils.CannonDebugRenderer.md#_particlematerial)
- [\_planeGeometry](X3D_X3DUtils.CannonDebugRenderer.md#_planegeometry)
- [\_sphereGeometry](X3D_X3DUtils.CannonDebugRenderer.md#_spheregeometry)
- [scene](X3D_X3DUtils.CannonDebugRenderer.md#scene)
- [tmpQuat0](X3D_X3DUtils.CannonDebugRenderer.md#tmpquat0)
- [tmpVec0](X3D_X3DUtils.CannonDebugRenderer.md#tmpvec0)
- [tmpVec1](X3D_X3DUtils.CannonDebugRenderer.md#tmpvec1)
- [tmpVec2](X3D_X3DUtils.CannonDebugRenderer.md#tmpvec2)
- [world](X3D_X3DUtils.CannonDebugRenderer.md#world)

### Methods

- [\_createMesh](X3D_X3DUtils.CannonDebugRenderer.md#_createmesh)
- [\_scaleMesh](X3D_X3DUtils.CannonDebugRenderer.md#_scalemesh)
- [\_typeMatch](X3D_X3DUtils.CannonDebugRenderer.md#_typematch)
- [\_updateMesh](X3D_X3DUtils.CannonDebugRenderer.md#_updatemesh)
- [update](X3D_X3DUtils.CannonDebugRenderer.md#update)

## Constructors

### constructor

• **new CannonDebugRenderer**(`scene`, `world`, `options?`): [`CannonDebugRenderer`](X3D_X3DUtils.CannonDebugRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `world` | `World` |
| `options?` | `object` |

#### Returns

[`CannonDebugRenderer`](X3D_X3DUtils.CannonDebugRenderer.md)

#### Defined in

[X3D/X3DUtils.ts:27](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L27)

## Properties

### \_boxGeometry

• `Private` **\_boxGeometry**: `BoxGeometry`

#### Defined in

[X3D/X3DUtils.ts:17](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L17)

___

### \_cylinderGeometry

• `Private` **\_cylinderGeometry**: `CylinderGeometry`

#### Defined in

[X3D/X3DUtils.ts:18](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L18)

___

### \_material

• `Private` **\_material**: `MeshBasicMaterial`

#### Defined in

[X3D/X3DUtils.ts:14](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L14)

___

### \_meshes

• `Private` **\_meshes**: `Mesh`\<`BufferGeometry`, `Material` \| `Material`[]\>[] \| `Points`\<`BufferGeometry`, `Material` \| `Material`[]\>[]

#### Defined in

[X3D/X3DUtils.ts:13](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L13)

___

### \_particleGeometry

• `Private` **\_particleGeometry**: `BufferGeometry`

#### Defined in

[X3D/X3DUtils.ts:20](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L20)

___

### \_particleMaterial

• `Private` **\_particleMaterial**: `PointsMaterial`

#### Defined in

[X3D/X3DUtils.ts:15](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L15)

___

### \_planeGeometry

• `Private` **\_planeGeometry**: `PlaneGeometry`

#### Defined in

[X3D/X3DUtils.ts:19](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L19)

___

### \_sphereGeometry

• `Private` **\_sphereGeometry**: `SphereGeometry`

#### Defined in

[X3D/X3DUtils.ts:16](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L16)

___

### scene

• **scene**: `Scene`

#### Defined in

[X3D/X3DUtils.ts:11](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L11)

___

### tmpQuat0

• `Private` **tmpQuat0**: `Quaternion`

#### Defined in

[X3D/X3DUtils.ts:25](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L25)

___

### tmpVec0

• `Private` **tmpVec0**: `Vec3`

#### Defined in

[X3D/X3DUtils.ts:22](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L22)

___

### tmpVec1

• `Private` **tmpVec1**: `Vec3`

#### Defined in

[X3D/X3DUtils.ts:23](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L23)

___

### tmpVec2

• `Private` **tmpVec2**: `Vec3`

#### Defined in

[X3D/X3DUtils.ts:24](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L24)

___

### world

• **world**: `World`

#### Defined in

[X3D/X3DUtils.ts:12](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L12)

## Methods

### \_createMesh

▸ **_createMesh**(`shape`): `Mesh`\<`BufferGeometry`, `Material` \| `Material`[]\> \| `Points`\<`BufferGeometry`, `Material` \| `Material`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `Shape` |

#### Returns

`Mesh`\<`BufferGeometry`, `Material` \| `Material`[]\> \| `Points`\<`BufferGeometry`, `Material` \| `Material`[]\>

#### Defined in

[X3D/X3DUtils.ts:142](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L142)

___

### \_scaleMesh

▸ **_scaleMesh**(`mesh`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`\<`BufferGeometry`, `Material` \| `Material`[]\> \| `Points`\<`BufferGeometry`, `Material` \| `Material`[]\> |
| `shape` | `Shape` |

#### Returns

`void`

#### Defined in

[X3D/X3DUtils.ts:311](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L311)

___

### \_typeMatch

▸ **_typeMatch**(`mesh`, `shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`\<`BufferGeometry`, `Material` \| `Material`[]\> \| `Points`\<`BufferGeometry`, `Material` \| `Material`[]\> |
| `shape` | `Shape` |

#### Returns

`boolean`

#### Defined in

[X3D/X3DUtils.ts:120](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L120)

___

### \_updateMesh

▸ **_updateMesh**(`index`, `body`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `body` | `Body` |
| `shape` | `Shape` |

#### Returns

`void`

#### Defined in

[X3D/X3DUtils.ts:109](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L109)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3DUtils.ts:53](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DUtils.ts#L53)
