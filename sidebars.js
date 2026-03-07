/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'README',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'About KubeAid',
      collapsed: false,
      items: [
        'kubeaid/why-kubeaid',
        'kubeaid/features-technical-details',
        'kubeaid/helm-umbrella-pattern',
        'kubeaid/prometheus-configuration',
        'kubeaid/gitops-drift-detection',
      ],
    },
    {
      type: 'category',
      label: 'Hosting Reference',
      items: [
        'hosting/cloud-providers',
        'hosting/bare-metal',
        'hosting/single-host-k8s',
        'hosting/hybrid-setup',
      ],
    },
    {
      type: 'doc',
      id: 'cluster-design',
      label: 'Cluster Design',
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/backup-restore',
        'operations/node-reboot',
        'operations/aws-private-link-setup',
        'operations/operations-tips',
        {
          type: 'category',
          label: 'Monitoring',
          items: [
            'operations/monitoring/pod-autoscaling',
            'operations/monitoring/prometheus-namespaces',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/ci-cd-setup',
        'development/helm_charts',
        'development/release-procedure',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/harbor-registry',
        'guides/hetzner-server-buy-guides',
        'guides/release',
        {
          type: 'category',
          label: 'Access Tokens',
          items: [
            'guides/access-token/github',
            'guides/access-token/gitlab',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'update_kubeaid_argocd_apps',
      label: 'Update ArgoCD Apps',
    },
    {
      type: 'doc',
      id: 'updating-your-kubernetes-cluster',
      label: 'Updating Kubernetes Cluster',
    },
  ],

  gettingStartedSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/README',
          label: 'Overview',
        },
        'getting-started/prerequisites',
        'getting-started/pre-configuration',
        'getting-started/bootstrap',
        'getting-started/post-configuration',
        'getting-started/upgrade',
        'getting-started/delete',
      ],
    },
  ],

  providersSidebar: [
    {
      type: 'category',
      label: 'AWS',
      items: [
        'providers/aws/prerequisites',
        'providers/aws/configuration',
        'providers/aws/features',
      ],
    },
    {
      type: 'category',
      label: 'Azure',
      items: [
        'providers/azure/prerequisites',
        'providers/azure/configuration',
        'providers/azure/features',
      ],
    },
    {
      type: 'category',
      label: 'Hetzner',
      items: [
        'providers/hetzner/prerequisites',
        'providers/hetzner/configuration',
        'providers/hetzner/features',
      ],
    },
    {
      type: 'category',
      label: 'Bare Metal',
      items: [
        'providers/bare-metal/prerequisites',
        'providers/bare-metal/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Local K3D',
      items: [
        'providers/local-k3d/prerequisites',
        'providers/local-k3d/configuration',
      ],
    },
  ],
};

export default sidebars;
