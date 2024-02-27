# Installation

Install one of the Seam SDKs in the programming language of your choice. Seam supports many programming languages, such as the following:

* [JavaScript / TypeScript](https://github.com/seamapi/javascript)
* [Python](https://github.com/hello-seam/seamapi-python)
* [Ruby Gem](https://rubygems.org/gems/seamapi)
* [PHP](https://github.com/seamapi/php)
* [Java](https://github.com/seamapi/java)
* [C#](https://github.com/seamapi/csharp)
* [Go](https://github.com/seamapi/go)

{% tabs %}
{% tab title="JavaScript" %}
```bash
npm i seam
```
{% endtab %}

{% tab title="Python" %}
```bash
pip install seam
# For some development environments, use pip3 in this command instead of pip.
```
{% endtab %}

{% tab title="Ruby" %}
```bash
bundle add seamapi
```
{% endtab %}

{% tab title="PHP" %}
```bash
composer require seamapi/seam
```
{% endtab %}

{% tab title="Java" %}
**Gradle:**

```gradle
// build.gradle
dependencies {
    implementation 'io.github.seamapi:java:0.x.x'
}
```

**Maven:**

```xml
<!-- pom.xml -->
<dependency>
    <groupId>io.github.seamapi</groupId>
    <artifactId>java</artifactId>
    <version>0.x.x</version>
</dependency>
```
{% endtab %}

{% tab title="C#" %}
Install using [nuget](https://www.nuget.org/packages/Seam).
{% endtab %}

{% tab title="Rust" %}
```bash
cargo add seamapi-rs
```

Hello Crustacean! This is a community library and is not officially being maintained by Seam.
{% endtab %}
{% endtabs %}
